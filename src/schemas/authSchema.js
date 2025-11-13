import * as yup from "yup";


export const loginSchema = yup.object({
    email: yup.string().email("Email inválido").required("O email é obrigatório"),
    password: yup
        .string()
        .required("A senha é obrigatória")
        .min(8, "A senha deve ter no mínimo 8 caracteres")
        .max(24, "A senha não pode ultrapassar 24 caracteres")
        .test(
            "not-numeric-only",
            "A senha não pode conter apenas números.",
            (value) => !/^\d+$/.test(value || "")
        ),
});


export const cadastrarSchema = loginSchema.shape({
    first_name: yup
        .string()
        .required("O primeiro nome é obrigatório").min(3, "O nome deve conter ao menos 3 letras")
        .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, "Apenas letras são permitidas"),

    last_name: yup
  .string()
  .nullable()
  .transform((v) => (v === "" ? null : v))
  .test(
    "valid-lastname",
    "O sobrenome deve conter ao menos 3 letras e apenas letras são permitidas",
    (value) => {
      if (!value) return true; // se estiver vazio, tudo bem (não é required)
      const onlyLetters = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(value);
      const minLength = value.length >= 3;
      return onlyLetters && minLength;
    }
  ),

    password_confirm: yup
        .string()
        .required("A confirmação de senha é obrigatória.")
        .test("match", "As senhas devem ser iguais", function (value) {
            return value === this.parent.password;
        }),
});

