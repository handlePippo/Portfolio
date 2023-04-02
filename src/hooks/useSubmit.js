import { useState } from "react";
import axios from "axios";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState({ type: "", message: "" });

  const submit = async (url, data) => {
    setLoading(true);
    try {
      await wait(2000);
      axios
        .post(url, {
          firstName: data.firstName,
          email: data.email,
          comment: data.comment,
        })
        .then(
          setResponse({
            type: "success",
            message: `Grazie per la tua richiesta ${data.firstName}, verrai ri-contattato quanto prima!`,
          }),
          (error) => {
            setResponse({
              type: "error",
              message: error.message,
            });
          }
        );
    } catch (error) {
      setResponse({
        type: "error",
        message: "Qualcosa è andato storto, riprova tra qualche istante!",
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
