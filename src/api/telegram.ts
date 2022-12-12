import axios, { AxiosResponse } from 'axios';

const TELEGRAM_API = {
  uploadFile: async (data: FormData) => {
    data.append('chat_id', process.env.REACT_APP_CHAT_ID || '');
    const sendDocRes: AxiosResponse<ITelegram.ISendDocumentResponse> =
      await axios.post(
        `https://api.telegram.org/bot${process.env.REACT_APP_TELEGRAM_BOT}/sendDocument`,
        data
      );
    const res: AxiosResponse<ITelegram.IGetFileResponse> = await axios.post(
      `https://api.telegram.org/bot${process.env.REACT_APP_TELEGRAM_BOT}/sendDocument`,
      {
        chat_id: sendDocRes.data.result.document.file_id,
      }
    );
    return {
      path: `https://api.telegram.org/file/bot${process.env.REACT_APP_TELEGRAM_BOT}/${res.data.result.file_path}`,
    };
  },
};

export default TELEGRAM_API;
