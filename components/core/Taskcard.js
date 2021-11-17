import { AnimatePresence, motion } from 'framer-motion'
import { es } from 'date-fns/locale'
import { format, fromUnixTime } from 'date-fns'
import { useForm } from 'react-hook-form'
import { Fragment, useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Input from 'components/controls/Input'
import Tooltip from 'components/animation/Tooltip'
import { gql, useMutation } from '@apollo/client'
import LargeInput from 'components/controls/LargeInput'
import Checkbox from 'components/controls/Checkbox'

const UPDATE_TASK = gql`
  mutation Mutation($taskInput: TaskInput) {
    updateTask(taskInput: $taskInput) {
      _id
    }
  }
`

const DELETE_TASK = gql`
  mutation Mutation($userId: String!, $index: Int!) {
    deleteTask(userId: $userId, index: $index) {
      _id
    }
  }
`

const schema = yup.object().shape({
  title: yup.string().required('Debe tener un titulo')
})

const Taskcard = ({ task = {}, refetch, id, index, dragConstraints }) => {
  const [updateTask] = useMutation(UPDATE_TASK)
  const [deleteTask] = useMutation(DELETE_TASK)
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: task.title,
      description: task.description,
      done: task.done
    }
  })

  const [edit, setEdit] = useState(false)

  useEffect(() => {
    if (task) {
      setValue('title', task.title)
      setValue('description', task.description)
      setValue('done', task.done)
    }
  }, [task])

  const dateFormat = (time) => {
    return format(fromUnixTime(time / 1000), 'PPpp', {
      locale: es
    })
  }

  const onSubmit = async (data) => {
    await updateTask({
      variables: {
        taskInput: {
          userId: id,
          index: index,
          done: data.done,
          title: data.title,
          description: data.description
        }
      }
    })
    await refetch({
      variables: {
        getUserDataId: id
      }
    })
    setEdit(false)
  }

  const handleDelete = async () => {
    await deleteTask({
      variables: {
        userId: id,
        index: index
      }
    })
    await refetch({
      variables: {
        getUserDataId: id
      }
    })
    setEdit(false)
  }

  return (

    <motion.div
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
      transition={{ duration: 1 }}
      className="m-8"
      drag={!edit}
      dragConstraints={dragConstraints}
      exit={{ scale: 0 }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <motion.div
          className="w-64 bg-card shadow-md p-4">
          <h1 className="flex justify-between items-center text-xl font-semibold">
            {
              edit
                ? <Input
                  register={register}
                  name="title"
                  error={errors.title}
                  removeMargin
                />
                : task.title
            }
            <Tooltip text="Editar">
              <button onClick={() => setEdit(true)} type="button">
                <img src="./logo.png" className="w-5 h-5" />
              </button>
            </Tooltip>
          </h1>
          <div className="w-full h-1 bg-gray-300 mb-2" />
          <div className="text-md">
            {
              edit
                ? <Fragment>
                  <LargeInput
                    name="description"
                    removeMargin
                    defaultText={task.description}
                    set={setValue}
                  />
                  <div className="w-full h-1 bg-gray-300 mb-2" />
                </Fragment>
                : <div>
                  {task.description}
                  {task.description && <div className="w-full h-1 bg-gray-300 mb-2" />}
                </div>
            }
          </div>

          <div className="text-md font-semibold flex mb-2 items-center">
            Estado:&nbsp; {
              task.done
                ? <div className="px-0.5 rounded-lg bg-green-500 text-white">
                  Terminado
                </div>
                : <div className="px-0.5 rounded-lg bg-red-500 text-white">
                  Incompleto
                </div>
            }
            {edit &&
              <div className="w-8 h-4">
                <Checkbox
                  register={register}
                  name="done"
                  defaultChecked={task.done}
                />
              </div>}
          </div>
          <div className="text-sm">
            Creado en: {dateFormat(task.createdAt)}
          </div>
        </motion.div>
        <div className="flex flex-row-reverse mx-3 justify-between ">
          <div>
            <AnimatePresence>
              {edit &&
                <motion.button
                  className="px-0.5 rounded-b-lg bg-card mx-2 font-semibold"
                  onClick={() => setEdit(false)}
                  animate={{ scale: 1, y: 0 }}
                  initial={{ scale: 0, y: -20 }}
                  exit={{ scale: 0, y: -10 }}
                  type="button"
                >
                  Cancelar
                </motion.button>}
            </AnimatePresence>
            <AnimatePresence>
              {edit &&
                <motion.button
                  className="px-0.5 bg-green-500 rounded-b-lg text-white font-semibold"
                  onClick={() => setEdit(false)}
                  animate={{ scale: 1, y: 0 }}
                  initial={{ scale: 0, y: -20 }}
                  exit={{ scale: 0, y: -10 }}
                  type="submit"
                >
                  Guardar
                </motion.button>}
            </AnimatePresence>
          </div>
          <AnimatePresence>
            {edit &&
              <motion.button
                className="px-0.5 rounded-b-lg bg-red-500 text-white mx-2 font-semibold"
                onClick={() => handleDelete()}
                animate={{ scale: 1, y: 0 }}
                initial={{ scale: 0, y: -20 }}
                exit={{ scale: 0, y: -10 }}
                type="button"
              >
                Eliminar
              </motion.button>}
          </AnimatePresence>
        </div>
      </form>
    </motion.div>
  )
}

export default Taskcard
