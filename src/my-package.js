// Javascript 파일을 굳이 써야할 경우에 아래와 같이 ts-check을 이용해서 ts를 사용하지만 ts문법을 무시하면서 사용하고
// JSDoc을 이용해서 parameter나 return의 type을 정해 코멘트를 남긴다면 ts파일에서 import를 하여 사용할 수 있다.

// @ts-check
/**
 * Initializes the project
 * @param {object} config 
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config) {
    return true;
}

/**
 * Exits the program
 * @param {number} code 
 * @returns number
 */
export function exit(code) {
    return code + 1;
}