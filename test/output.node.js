function icon() {
  return (new DOMParser().parseFromString("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n    <path fill=\"none\" d=\"M0 0h24v24H0V0z\"></path>\n    <path d=\"M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z\"></path>\n</svg>", 'image/svg+xml')).firstChild;
}

export default icon;
