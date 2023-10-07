export const message = {
  error: (msg, duration = 3000) => {
    const container = document.createElement('div');
    container.className = 'el-message el-message--error';
    container.style.zIndex = '9999';

    container.innerHTML = `
    <i class="el-icon el-message__icon el-message-icon--error"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"></path></svg></i>
    <p class="el-message__content">${msg}</p>
    `;

    document.body.appendChild(container);

    setTimeout(() => {
      container.style.opacity = 0;
    }, duration);

    setTimeout(() => {
      document.body.removeChild(container);
    }, duration + 300);
  },
};