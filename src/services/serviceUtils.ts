import type { MessageApi } from 'antd/lib/message';
import { message } from 'antd';

const serviceUtils = () => {
  const parseError = async (
    err: Response | any,
    msgComponent: MessageApi = message, // TODO: remove this param, just use antd.message
    defaultErrMsg?: string,
  ) => {
    const defaultErrStr = defaultErrMsg
      ? defaultErrMsg
      : 'Something unexpected happened, please try again later.';
    if (!err || !err.response) {
      msgComponent.error(defaultErrStr);
      return;
    }
    const res = await err.response.json();
    if (!res || !res.title) {
      msgComponent.error(defaultErrStr);
      return;
    }
    msgComponent.error(res.title);
  };

  function getQueryVariable(name: string, url = window.location.href) {
    const filteredName = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + filteredName + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  function randomIntFromInterval(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function toDict(arr: any[]) {
    return JSON.parse(JSON.stringify(arr));
  }

  return {
    parseError,
    getQueryVariable,
    randomIntFromInterval,
    toDict,
  };
};

export default serviceUtils();
