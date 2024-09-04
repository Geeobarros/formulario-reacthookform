import { useState } from "react";
import { useForm } from "react-hook-form";

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    
    setMessage(true);
    console.log('data:', data);
    reset();
  };

  return (
    <div className="min-h-screen bg-rose-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-xs">
        <h1 className="text-2xl font-semibold text-center mb-6">Registrar</h1>
        <form className="form-control space-y-4" onSubmit={handleSubmit(onSubmit)}>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Nome:</label>
            <input
              className="input input-bordered w-full"
              type="text"
              {...register("nome", { required: "Nome é obrigatório" })}
            />
            {errors.nome && <p className="text-error text-xs mt-1">{errors.nome.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              className="input input-bordered w-full"
              type="email"
              {...register("email", { required: "E-mail é obrigatório" })}
            />
            {errors.email && <p className="text-error text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Senha:</label>
            <input
              className="input input-bordered w-full"
              type="password"
              {...register("senha", { required: "Senha é obrigatória" })}
            />
            {errors.senha && <p className="text-error text-xs mt-1">{errors.senha.message}</p>}
          </div>

          <button type="submit" className="btn bg-rose-400 text-rose-600 w-full">Registrar</button>

          {message && <p className="text-center text-red-600 mt-4">Registro realizado com sucesso</p>}
        </form>
      </div>
    </div>
  );
};

export default Formulario;
