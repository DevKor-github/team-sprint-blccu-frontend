import {
  AppDetailBar,
  AppDetailBarTitle,
} from '@/components/ui-unstable/app-detail-bar';

const PrivacyPolicyPage = () => {
  return (
    <div>
      <AppDetailBar>
        <AppDetailBarTitle>개인정보 처리방침</AppDetailBarTitle>
      </AppDetailBar>
      <div className="flex flex-col gap-6 p-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">
            1. 개인정보의 수집 및 이용 목적
          </h2>
          <p>
            블꾸(이하 "회사")는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
          </p>
          <ul className="list-inside list-disc text-sm">
            <li>회원 관리</li>
            <li>서비스 제공</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">
            2. 개인정보의 보유 및 이용기간
          </h2>
          <h3 className="font-semibold">
            소비자의 불만 또는 분쟁처리에 관한 기록
          </h3>
          <div className="flex flex-col gap-1">
            <p className="text-sm">
              보존 이유: 전자상거래 등에서의 소비자보호에 관한 법룔 제6조 및
              시행령 제6조
            </p>
            <p className="text-sm">보존 기간: 3년</p>
          </div>
          <h3 className="font-semibold">본인확인에 관한 기록</h3>
          <div className="flex flex-col gap-1">
            <p className="text-sm">
              정보통신망 이용촉진 및 정보보호에 관한 법률 제 44조의5 및 시행령
              제 29조
            </p>
            <p className="text-sm">보존 기간: 6개월</p>
          </div>
          <h3 className="font-semibold">접속에 관한 기록 </h3>
          <div className="flex flex-col gap-1">
            <p className="text-sm">
              보존 이유: 통신비밀보호법 제15조의2 및 시행령 제41조
            </p>
            <p className="text-sm">보존 기간: 3개월</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">3. 수집하는 개인정보의 항목</h2>
          <p>
            회사는 회원가입, 서비스 이용 등을 위해 아래와 같은 개인정보를
            수집하고 있습니다.
          </p>
          <p>1. 사용자 입력으로 수집한 항목</p>
          <ul className="list-inside list-disc text-sm">
            <li>이메일 또는 소셜 미디어 서비스 ID: 사용자의 구분</li>
            <li>이름: 콘텐츠에서 작성자의 정보를 보여주기 위함</li>
            <li>프로필 사진: 콘텐츠에서 작성자의 정보를 보여주기 위함</li>
          </ul>
          <p>2. 자동 수집된 항목</p>
          <ul className="list-inside list-disc text-sm">
            <li>IP 정보, 이용 기록, 접속 로그, 쿠키, 접속 기록 등</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">
            4. 개인정보의 파기절차 및 방법
          </h2>
          <p>이용자는 로그인 후 [설정] 페이지에서 계정을 탈퇴할 수 있습니다.</p>
          <p>
            또는, 가입한 계정의 이메일을 사용하여 개인정보 관리 책임자(7조
            참고)에게 이메일을 발송하여 탈퇴 요청을 할 수 있습니다.
          </p>
          <h3 className="font-semibold">파기절차</h3>
          <p>
            탈퇴처리가 진행되면 DB에 있는 계정정보와, 해당 계정으로 작성된 모든
            게시글과 댓글이 삭제됩니다.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">5. 개인정보 제공</h2>
          <p>
            회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.
            다만, 아래의 경우에는 예외로 합니다.
          </p>
          <ul className="list-inside list-disc text-sm">
            <li>이용자들이 사전에 동의한 경우</li>
            <li>
              법령의 규정에 의거하거나, 수사 목적으로 사회사의 요구가 있는 경우
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">
            6. 개인정보의 안정성 확보조치에 관한 사항
          </h2>
          <p>1) 개인정보 암호화</p>
          <p>2) 해킹 등에 대비한 대책</p>
          <p>3) 취급 직원의 최소화 및 교육</p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">
            7. 개인정보 관리 책임자 및 담당자
          </h2>
          <p>성명: 여주은</p>
          <p>이메일: talelorz.cs@gmail.com</p>
          <p>
            기타 개인정보침해에 대한 신고나 상담이 필요한 경우에는 아래 회사에
            문의하시기 바랍니다.
          </p>
          <p>개인정보침해신고센터 (www.118.or.kr / 118)</p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">
            8. 개인정보 취급방침 변경에 관한 사항
          </h2>
          <p>이 개인정보 취급방침은 2024년 8월 1일부터 적용됩니다.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
