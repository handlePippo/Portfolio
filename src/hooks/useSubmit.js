import { useState } from "react";
import axios from "axios";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState({});

  const onSet = (args) => {
    setResponse(args);
  };

  const submit = async (url, data) => {
    setLoading(true);
    try {
      await wait(2000);
      await axios.post(url, data);
      setResponse({
        type: "success",
        message: `Grazie per la tua richiesta, verrai ri-contattato quanto prima!`,
      });
    } catch (error) {
      setResponse({
        type: "error",
        message: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit, onSet };
};

export default useSubmit;
