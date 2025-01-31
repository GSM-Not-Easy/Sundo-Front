import styled from 'styled-components';

export const EmploymentWrapper = styled.div`
  width: 100vw;
  height: 85vh;
  display: flex;
  justify-content: center;
`;

export const EmploymentContainer = styled.div`
  width: 37.5rem;
  height: 100%;
  margin-top: 3.5rem;
`;

export const TitleInputsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1.5rem;
`;

export const TitleContainer = styled.div`
  width: 18rem;
`;

export const Title = styled.span`
  color: #212121;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  display: flex;
  margin-bottom: 0.5rem;
`;

export const JobContainer = styled.div`
  width: 18rem;
`;

export const Input = styled.input`
  width: 18rem;
  height: 3rem;
  padding-left: 0.875rem;
  justify-content: center;
  align-items: center;
  color: #5d5d5d;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;

  border: 0.0625rem solid #b2b2b2;
  border-radius: 0.5rem;
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.3125rem;
`;

export const DetailContentContainer = styled.div`
  font-size: 0.625rem;
  display: flex;
  flex-direction: column;
  margin-top: 1.3125rem;
`;

export const DetailContentTextArea = styled.textarea`
  width: 37rem;
  height: 7.8125rem;
  border-radius: 0.5rem;
  border: 0.0625rem solid #b2b2b2;
  resize: none;
  outline: none;
  padding: 1.25rem;

  &::placeholder {
    color: #b2b2b2;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;

  select {
    border-radius: 0.5rem;
    border: 0.0625rem solid #b2b2b2;
    width: 17.4375rem;
    height: 3rem;
    border: 0.0625rem solid #b2b2b2;
    font-size: 1rem;
    font-weight: 400;
    color: #b2b2b2;
    outline: none;
    padding-left: 0.75rem;
  }
`;

export const UploadContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1.5rem;
  margin-top: 1.9375rem;
`;

export const UploadButton = styled.div`
  display: flex;
  padding: 0.75rem 5.6563rem;
  justify-content: center;
  align-items: center;
  width: 18rem;
  height: 3rem;
  color: white;
  cursor: pointer;
  border-radius: 0.5rem;
  background: #6142f8;
`;

export const FileTitle = styled.div`
  display: flex;
  padding: 0.375rem 0.75rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 8.3125rem;
  height: 1.875rem;
  margin-top: 0.75rem;
  z-index: -100;
  color: #5d5d5d;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem;
  border-radius: 2rem;
  background: #f5f5f5;
`;

export const MenuTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  width: 37.5rem;
  margin-top: 3rem;
`;

export const MenuTitle = styled.div`
  border-radius: 0.5rem;
  border: 0.0625rem solid #6142f8;
  background: #fff;
  cursor: pointer;

  box-shadow: 0rem 0.25rem 0.25rem 0rem rgba(0, 0, 0, 0.25);
  width: 7.625rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6142f8;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;

  &:hover {
    color: white;
    background-color: #6142f8;
  }
`;

export const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1.25rem;
`;

export const Link = styled.input`
  width: 37rem;
  height: 3rem;
  border-radius: 0.5rem;
  border: 0.0625rem solid #b2b2b2;
  color: #5d5d5d;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  text-indent: 1rem;
  position: relative;
  bottom: 0.5rem;

  &::placeholder {
    color: #b2b2b2;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
  }
`;

export const FieldWrapper = styled.div`
  display: flex;
  gap: 33px;
`;

export const DateContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 11px;
`;

export const InputDate = styled.input`
  border-radius: 0.5rem;
  border: 0.0625rem solid #b2b2b2;
  width: 17.4375rem;
  height: 3rem;
  border: 0.0625rem solid #b2b2b2;
  font-size: 13px;
  font-weight: 400;
  color: black;
  outline: none;
  padding-left: 0.75rem;

  &::placeholder {
    color: #b2b2b2;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
`;
