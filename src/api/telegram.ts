import axios, { AxiosResponse } from 'axios';

const BOT_ID = '5683327648:AAForuzEywsdCCXFlR04En_Gl7pD34poVl4';
const CHAT_ID = '-4033752446';

const TELEGRAM_API = {
  uploadFile: async (file: File) => {
    let data = new FormData();
    data.append('document', file);
    data.append('chat_id', CHAT_ID);
    const sendDocRes: AxiosResponse<ITelegram.ISendDocumentResponse> =
      await axios.post(
        `https://api.telegram.org/bot${BOT_ID}/sendDocument`,
        data
      );
    const res: AxiosResponse<ITelegram.IGetFileResponse> = await axios.post(
      `https://api.telegram.org/bot${BOT_ID}/getFile`,
      {
        file_id: sendDocRes.data.result.document.file_id,
      }
    );
    return {
      path: `https://api.telegram.org/file/bot${BOT_ID}/${res.data.result.file_path}`,
    };
  },
};

export default TELEGRAM_API;
