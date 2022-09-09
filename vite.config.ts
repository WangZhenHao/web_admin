import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  let config: any =  {
    plugins: [vue()]
  }

  if(command === 'build') {
    // 打包的时候需要的插件
    
} else if(command === 'serve') {
    // 本地服务所需要的配置
    config.server = {
        host: '0.0.0.0',
        port: 3001
    }
}

  return config
})
