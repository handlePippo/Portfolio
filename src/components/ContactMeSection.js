import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit, onSet } = useSubmit();
  const { onOpen } = useAlertContext();
  const [endSubmit, setEndSubmit] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      comment: "",
    },
    onSubmit: (values) => {
      submit("https://formspree.io/f/mgebpnew", values)
        .then(() => {
          setEndSubmit(true);
        })
        .catch((error) => {
          onOpen("error", error.message);
        });
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "Troppo corto!")
        .max(20, "Troppo lungo!")
        .required("Obbligatorio"),
      email: Yup.string()
        .email("Indirizzo email errato")
        .required("Obbligatorio"),
      comment: Yup.string()
        .min(25, "Deve essere almeno di 25 caratteri")
        .required("Obbligatorio"),
    }),
  });

  useEffect(() => {
    if (endSubmit) {
      onOpen("success", response.message);
      setEndSubmit(false);
    }
    onSet({});
  }, [endSubmit]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor='#512DA8'
      py={8}
      spacing={[4, 8]}
    >
      <VStack
        w='60vw'
        p={[4, 8, 16, 32]}
        alignItems={["center", "flex-start"]}
        justifyContent='center'
        textAlign={["center", "left"]}
        id='contactme-section'
      >
        <Heading as='h1' fontSize={["3xl", "4xl"]} marginBottom='20px'>
          Contattami
        </Heading>
        <Box rounded='md' w='100%'>
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={[2, 4]}>
              <FormControl
                isInvalid={formik.touched.firstName && formik.errors.firstName}
                w='100%'
              >
                <FormLabel htmlFor='firstName'>Nome</FormLabel>
                <Input
                  id='firstName'
                  name='firstName'
                  {...formik.getFieldProps("firstName")}
                  width='100%'
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.touched.email && formik.errors.email}
                w='100%'
              >
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input
                  id='email'
                  name='email'
                  {...formik.getFieldProps("email")}
                  type='email'
                  width='100%'
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.touched.comment && formik.errors.comment}
                w='100%'
              >
                <FormLabel htmlFor='comment'>Commento</FormLabel>
                <Textarea
                  id='comment'
                  name='comment'
                  {...formik.getFieldProps("comment")}
                  width='100%'
                  height={200}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>

              <Button
                className='anchor'
                mt={[4, 8]}
                colorScheme='purple'
                isLoading={isLoading}
                type='submit'
              >
                Invia
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
