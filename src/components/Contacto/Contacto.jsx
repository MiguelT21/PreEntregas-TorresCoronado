import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import './Contacto.css'


const Contacto = () => {
  const datosFormulario = React.useRef();
  const [errors, setErrors] = React.useState({});
//Validaciones para el formulario
  const schema = Yup.object().shape({
    name: Yup.string().required("El campo Nombre es obligatorio"),
    email: Yup.string()
      .email("Ingresa un email válido")
      .required("El campo Email es obligatorio"),
    phone: Yup.string().matches(/^[0-9]{10}$/, 'El número de teléfono debe tener 10 dígitos').required('El número de teléfono es requerido'),
    message: Yup.string().required("El campo Consulta es obligatorio"),
  });

  let navigate = useNavigate();

  const consultarFormulario = async (e) => {
    e.preventDefault();
    const datForm = new FormData(datosFormulario.current);
    const contacto = Object.fromEntries(datForm);
    try {
      await schema.validate(contacto, { abortEarly: false });
      console.log(contacto);
      e.target.reset();
      toast.success("Consulta enviada correctamente");
      navigate("/");
    } catch (error) {
      const validationErrors = {};

      error.inner.forEach((err) => {
        validationErrors[err.path] = err.message;
      });

      console.error(validationErrors);
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
  <div className="card" style={{ width: "50%", padding: "20px" }}>
    <div className="container" style={{ marginTop: "20px" }}>
      <h3 style={{ textAlign: "center" }}>¡CONTACTANOS!</h3>
      <form onSubmit={consultarFormulario} ref={datosFormulario}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            name="name"
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.name}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            name="email"
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="celular" className="form-label">
            Numero telefonico
          </label>
          <input
            type="number"
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            name="phone"
          />
          {errors.phone && (
            <div className="invalid-feedback">{errors.phone}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="consulta" className="form-label">
            Consulta
          </label>
          <textarea
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            name="message"
            rows={3}
            defaultValue={""}
          />
          {errors.message && (
            <div className="invalid-feedback">{errors.message}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  </div>
</div>

  );
};

export default Contacto;
