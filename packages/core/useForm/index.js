import { ref } from 'vue';

export function useForm() {
  const ruleFormRef = ref(null);
  const submitForm = (formRef = ruleFormRef) => {
    const formName = formRef.value || formRef;
    if (!formName) return false;
    return new Promise((resolve) => {
      formName.validate((valid) => {
        resolve(valid);
      });
    });
  };
  const resetForm = (formRef = ruleFormRef) => {
    const formName = formRef.value || formRef;
    formName.resetFields();
  };
  return { ruleFormRef, submitForm, resetForm };
}
