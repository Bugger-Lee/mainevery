<!--
 * @Author: lijian
 * @since: 2022-07-28 16:33:43
 * @lastTime: 2022-08-18 10:15:44
 * @LastAuthor: lijian
 * @message: 
-->
<script setup lang="ts">
import { FormInstance, FormRules } from 'element-plus'
import { defineComponent, h, reactive, ref, render } from 'vue'
import { MyIcons, useRenderIcons } from '@/components/ReIcon/index'
import ReImageVerify from '@/components/ReImageVerify/index.vue'
import { useRouter } from 'vue-router'
const form = reactive({
  name: '',
  password: '',
  code: ''
})
const rules = reactive<FormRules>({
  name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
})
const imgCode = ref('')
const ruleFormRef = ref<FormInstance>()
const loading = ref(false)
const route = useRouter()
const onLogin = async (formEl: FormInstance | undefined) => {
  console.log({ ...formEl })
  if (!formEl) return
  loading.value = true
  await formEl.validate((valid, fields) => {
    console.log(valid)
    if (valid) {
      console.log(form)
      if (form.code === imgCode.value) {
        console.log(111)
        route.push('/home')
      }
    }
    setTimeout(() => {
      loading.value = false
    }, 2000)
  })
}
</script>

<template>
  <div class="bg"></div>
  <div class="login-boxs">
    <h3>平台登录</h3>
    <el-form
      ref="ruleFormRef"
      :rules="rules"
      :model="form"
      style="padding: 0 20px"
      @keyup.enter="onLogin(ruleFormRef)"
    >
      <el-form-item prop="name">
        <el-input
          v-model="form.name"
          :prefix-icon="
            useRenderIcons('ep:avatar', {
              color: '#5e8ae9',
              width: '24px',
              height: '24px'
            })
          "
          size="large"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="form.password"
          type="password"
          show-password
          :prefix-icon="
            useRenderIcons('ep:lock', {
              color: '#5e8ae9',
              width: '24px',
              height: '24px'
            })
          "
          size="large"
        ></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input v-model="form.code" size="large">
          <template #append>
            <ReImageVerify v-model:code="imgCode" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          style="width: 100%; margin-top: 20px"
          type="primary"
          @click="onLogin(ruleFormRef)"
          :loading="loading"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
    <MyIcons
      icon="ep:pear"
      color="#ccec57"
      width="24px"
      height="24px"
    ></MyIcons>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background: #4a93f5;
  background-image: linear-gradient(to right bottom, #662af3, #5e8ae9, #b9b3f1);
}
.login-boxs {
  width: 350px;
  height: 360px;
  background: #fff;
  border-radius: 5px;
  h3 {
    padding-top: 20px;
  }
}
::v-deep .el-input-group__append {
  padding: 0;
}
</style>
