module.exports = {
  // ファイルの存在確認
  isExistFile: file => {
    try {
      fs.statSync(file);
      return true;
    } catch(err) {
      return false;
    }
  }
}
