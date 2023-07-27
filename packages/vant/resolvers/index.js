export function KvuseResolver(componentName) {
  if (componentName.startsWith('Kv')) { return { name: componentName, from: '@kvuse/vant' }; }
}
