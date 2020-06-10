function message(params) {
  params._this.$message.closeAll();
  params._this.$message({
      message: params.message || 'hello world！',
      type: params.type || 'success'
    });
}


export {
  message
}
