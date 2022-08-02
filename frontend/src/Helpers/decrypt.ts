import CryptoJS from "crypto-js";
import Utf8 from "crypto-js/enc-utf8";
import AES from "crypto-js/aes";

const configValue: string = "3MKTLDw8b4sMQRuAqh1VMCUll399mIJmPO2DXnEGG0/tkFae"


const decrypt = async (data: any) => {
  var bytes = AES.decrypt(data, configValue);
  var originalText = bytes.toString(Utf8);
  return originalText;
};

const decryptObject = async (data: any) => {
  var bytes = CryptoJS.AES.decrypt(data, configValue);
  var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
};

const decryptHomeQuiz = async (data: any) => {
  const result = await Promise.all(
    data.map(async (eachQuiz: any) => {
      return {
        ...eachQuiz,
        title: await decrypt(eachQuiz.title),
      };
    })
  );
  return await result;
};

const decryptEachQuiz = async (data: any) => {
  const result = await Promise.all(
    data.map(async (quiz: any) => {
      return {
        ...quiz,
        title: await decrypt(quiz.title),
        questions: await decryptObject(quiz.questions),
      };
    })
  );
  return result;
};



export { decrypt, decryptObject, decryptHomeQuiz, decryptEachQuiz };