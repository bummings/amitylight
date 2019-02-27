// outline ring css property is disabled UNLESS a user hits the tab key- // this is for removing that unsightly focus ring but not disabling it
// entirely so as to perserve the accessability for mouse-less users.

function handleFirstTab(e) {
  if (e.keyCode === 9) {
    // tab key
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleFirstTab);
  }
}
window.addEventListener('keydown', handleFirstTab);
