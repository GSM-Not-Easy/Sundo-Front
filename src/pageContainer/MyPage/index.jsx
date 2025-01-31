import { Header } from '../../components';
import * as S from './style';
import { LinkIcon, ModifyIcon } from '../../assets/svg';
import Boy from '../../assets/png/Boy.png';
import Girl from '../../assets/png/Girl.png';
import { useNavigate } from 'react-router-dom';
import { slicePoint } from '../../api/src/hooks/util/sliceNumber';
import { formatStudentNumber } from '../../api/src/hooks/util/formatStudentNumber';
import { useRecoilValue } from 'recoil';
import { IsLoginInfo } from '../../atoms/atoms';

const MyPage = () => {
  const isLoginInfo = useRecoilValue(IsLoginInfo);
  const navigation = useNavigate();
  return (
    <>
      <Header />
      <S.MyPageWrapper>
        <S.WhiteWrapper>
          <S.WhiteContainer>
            <S.ProfileWrapper>
              <S.ProfileContainer>
                <S.ImgContainer>
                  <img
                    src={slicePoint(isLoginInfo.number, Boy, Girl)}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    alt='123'
                  />
                </S.ImgContainer>
                <S.ProfileContent>
                  <S.NameMajorContainer>
                    <S.Name>{isLoginInfo.name}</S.Name>
                    <S.Major>{isLoginInfo.major}</S.Major>
                  </S.NameMajorContainer>
                  <S.ClassInfo>
                    <S.ClassInfoTitle>
                      {`${isLoginInfo.grade}${
                        isLoginInfo.classNum
                      }${formatStudentNumber(isLoginInfo.number)}`}
                    </S.ClassInfoTitle>
                    <span className='dot'>·</span>
                    <S.ClassInfoTitle>{isLoginInfo.email}</S.ClassInfoTitle>
                  </S.ClassInfo>
                </S.ProfileContent>
              </S.ProfileContainer>
              <S.ModifyIconWrapper>
                <S.ModifyIconContainer onClick={() => navigation('/modifymy')}>
                  <ModifyIcon />
                </S.ModifyIconContainer>
              </S.ModifyIconWrapper>
            </S.ProfileWrapper>
            <S.IntroduceContainer>
              <S.TitleContainer>
                <S.Introduce>자기소개</S.Introduce>
              </S.TitleContainer>
              <S.ContentContainer>
                <S.IntroduceConent>{isLoginInfo.info}</S.IntroduceConent>
              </S.ContentContainer>
            </S.IntroduceContainer>
            <S.LinkWrapper>
              <S.TitleContainer>
                <S.Introduce>소개링크</S.Introduce>
              </S.TitleContainer>
              <S.LinkSortContainer>
                <S.LinkContainer
                  onClick={() => (window.location.href = isLoginInfo.github)}
                >
                  <S.LinkBox>
                    <LinkIcon />
                  </S.LinkBox>
                  <S.LinkContent>
                    <S.SiteName>Github</S.SiteName>
                    <S.SiteLink>{isLoginInfo.github}</S.SiteLink>
                  </S.LinkContent>
                </S.LinkContainer>
                <S.LinkContainer
                  onClick={() => (window.location.href = isLoginInfo.blog)}
                >
                  <S.LinkBox>
                    <LinkIcon />
                  </S.LinkBox>
                  <S.LinkContent>
                    <S.SiteName>Blog</S.SiteName>
                    <S.SiteLink>{isLoginInfo.blog}</S.SiteLink>
                  </S.LinkContent>
                </S.LinkContainer>
                <S.LinkContainer
                  onClick={() => (window.location.href = isLoginInfo.insta)}
                >
                  <S.LinkBox>
                    <LinkIcon />
                  </S.LinkBox>
                  <S.LinkContent>
                    <S.SiteName>Instagram</S.SiteName>
                    <S.SiteLink>{isLoginInfo.insta}</S.SiteLink>
                  </S.LinkContent>
                </S.LinkContainer>
              </S.LinkSortContainer>
            </S.LinkWrapper>
          </S.WhiteContainer>
        </S.WhiteWrapper>
      </S.MyPageWrapper>
    </>
  );
};

export default MyPage;
