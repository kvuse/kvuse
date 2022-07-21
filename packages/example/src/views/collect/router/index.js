export default [
  {
    path: '/collect',
    name: 'collect',
    component: () => import('../index.vue'),
    children: [
      {
        path: '/collect/normal',
        name: 'normal',
        component: () => import('../index.vue'),
      },
    ],
  },
];
