import DOMPurify from 'dompurify';

export const sanitizeInput = (input) => {
    return DOMPurify.sanitize(input);
};

export const validateInput = (input) => {
  return sanitizeInput(input);
};