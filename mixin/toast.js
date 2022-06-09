export default {
  methods: {
    showToast() {
      this.$alert('请联系客服查看演示项目', '温馨提示', {
        confirmButtonText: '确定',
        callback: action => {
          
        }
      });
    }
  }
}