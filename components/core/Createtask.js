import { gql, useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Button from 'components/controls/Button'
import Checkbox from 'components/controls/Checkbox'
import LargeInput from 'components/controls/LargeInput'

const CREATE_TASK = gql`
  mutation Mutation($taskInput: TaskInput) {
    createTask(taskInput: $taskInput) {
      _id
    }
  }
`

const schema = yup.object().shape({
  title: yup.string().required('Titulo obligatorio')
})

const Createtask = ({ handleClose, refetch, id }) => {
  const [createTask] = useMutation(CREATE_TASK)
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data) => {
    await createTask({
      variables: {
        taskInput: {
          userId: id,
          done: data.done,
          title: data.title,
          description: data.description
        }
      }
    })
    handleClose()
    await refetch({
      variables: {
        getUserDataId: id
      }
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LargeInput
        name="title"
        removeMargin
        error={errors.title}
        set={setValue}
        placeholder="Título"
      />
      <LargeInput
        name="description"
        placeholder="Descripción"
        removeMargin
        set={setValue}
      />
      <div className="ml-4">
        <Checkbox
          register={register}
          name="done"
          label="Finalizado: "
        />
      </div>
      <Button text="Crear tarea" type="submit" />
    </form>
  )
}

export default Createtask
