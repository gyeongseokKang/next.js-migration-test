export const KAKAO_API_KEY = "94c0c0dc898bf3080b3d5e681a88a2f0";
export const REDIRECT_URI = "http://localhost:1002";
// export const REDIRECT_URI = "http://localhost:1002/oauth/kakao";
// #TODO: redirect uri 변경

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
