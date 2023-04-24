// GlobalComponents for Volar
declare module '@kvuse/vant'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    KvButton: typeof import('@kvuse/vant')['KvButton'],
    KvInput: typeof import('@kvuse/vant')['KvInput'],
    KvTable: typeof import('@kvuse/vant')['KvTable'],
    KvTree: typeof import('@kvuse/vant')['KvTree'],
  }

  interface ComponentCustomProperties { }
}

export {}
