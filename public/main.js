
const ss_btn = document.getElementById("112");
ss_btn.addEventListener("click", () => {
  const shadowsocksLink = "ssconf://ss.zwenyi.xyz/ss#test";
  const outlineURL = `intent://${shadowsocksLink.slice(
    8
  )}#Intent;scheme=ssconf;package=org.outline.android.client;end;`;
  window.location.href = outlineURL;
});
