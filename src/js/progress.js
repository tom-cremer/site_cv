import {settings} from './settings';
export function progressScroll() {
  window.onscroll = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById(settings.idProgressBar).style.width = `${scrolled}%`;
  };
}
