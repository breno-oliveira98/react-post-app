// ContactForm.js
import { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'O nome é obrigatório.';
    if (!formData.email) newErrors.email = 'O e-mail é obrigatório.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'O e-mail não é válido.';
    if (!formData.phone) newErrors.phone = 'O telefone é obrigatório.';
    if (!formData.message) newErrors.message = 'A mensagem é obrigatória.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Envio dos dados
      console.log('Dados enviados:', formData);
      alert('Mensagem enviada com sucesso!');
      // Limpar o formulário
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container p-4" style={{ maxWidth: '500px' }}>
      <h3 className="text-center mb-4">Formulário de Contato</h3>

      <div className="mb-3">
        <label className="form-label">Nome:</label>
        <input
          type="text"
          name="name"
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          name="email"
          id='email'
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor='phone'>Telefone:</label>
        <input
          type="text"
          name="phone"
          id='phone'
          className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor='message'>Mensagem:</label>
        <textarea
          name="message"
          className={`form-control ${errors.message ? 'is-invalid' : ''}`}
          rows="4"
          id='message'
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <div className="invalid-feedback">{errors.message}</div>}
      </div>

      <button type="submit" className="btn btn-primary w-100">Enviar</button>
    </form>
  );
};
