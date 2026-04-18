import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { viewportSettings } from '../../lib/motion';
import { GlassCard } from '../ui/GlassCard';
import { GradientButton } from '../ui/GradientButton';
import { SectionHeading } from '../ui/SectionHeading';

const initialForm = { username: '', password: '' };

export function LoginSection({ isActive, onBackToLanding, onLogin }) {
  const [formValues, setFormValues] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  useEffect(() => {
    if (!isActive) {
      setStatus({ type: 'idle', message: '' });
      setErrors({});
      setFormValues(initialForm);
    }
  }, [isActive]);

  const validate = () => {
    const nextErrors = {};

    if (!formValues.username.trim()) {
      nextErrors.username = 'Informe o usuário para continuar.';
    }

    if (!formValues.password.trim()) {
      nextErrors.password = 'Informe a senha para continuar.';
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setStatus({ type: 'idle', message: '' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const result = onLogin(formValues);
    setStatus({
      type: result.success ? 'success' : 'error',
      message: result.message,
    });
  };

  return (
    <section
      id="access-platform"
      className={`px-6 py-20 transition-all duration-500 sm:px-8 lg:px-12 lg:py-28 ${
        isActive ? 'scroll-mt-10' : ''
      }`}
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Acesso administrativo"
            title="Entre na plataforma criada para decisões financeiras mais inteligentes."
            align="left"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          transition={{ duration: 0.75 }}
        >
          <GlassCard className="p-8 sm:p-10">
            <div className="mb-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
                    Acessar Plataforma
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold text-slate-900">Bem-vindo de volta</h3>
                </div>
                {isActive ? (
                  <button
                    type="button"
                    onClick={onBackToLanding}
                    className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 transition hover:border-sky-200 hover:text-sky-700"
                  >
                    Voltar
                  </button>
                ) : null}
              </div>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <FloatingInput
                id="username"
                type="text"
                name="username"
                label="Usuário"
                value={formValues.username}
                onChange={handleChange}
                error={errors.username}
              />
              <FloatingInput
                id="password"
                type="password"
                name="password"
                label="Senha"
                value={formValues.password}
                onChange={handleChange}
                error={errors.password}
              />

              <GradientButton type="submit" className="w-full">
                Entrar
              </GradientButton>

              <p
                className={`min-h-6 text-sm ${
                  status.type === 'success'
                    ? 'text-emerald-700'
                    : status.type === 'error'
                      ? 'text-rose-500'
                      : 'text-slate-500'
                }`}
              >
                {status.message}
              </p>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingInput({ id, label, error, ...props }) {
  return (
    <div>
      <div className={`floating-field ${error ? 'floating-field-error' : ''}`}>
        <input id={id} placeholder=" " className="peer" {...props} />
        <label htmlFor={id}>{label}</label>
      </div>
      <p className="mt-2 min-h-5 text-sm text-rose-500">{error || ''}</p>
    </div>
  );
}
