import BackgroundContainer from './component/background';
import CenteredImage from './component/logo';

export default function Home() {
  return (
    <main>
      <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
      <BackgroundContainer 
        sourceName="/heart-animation.gif"
        iframeSrc="https://app.test-videospan.com/embed-collect-response/9f04fcfb-2bdb-4422-83d7-6062a180b17b/793cc763-82f0-49a6-95d9-a4ebcd70f154/eb641c8d-fdbf-465a-a66a-158813729737?_branch_match_id=1392874297684744850&utm_source=braid-app&utm_medium=participation-link&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nMy9YrSS0u0S3LTEnNLy5IzNNLzs%2FVTy1z8fWpyjExCkqyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUA7qhMrEUAAAA%3D"
      >
        <CenteredImage src="/logo.png" /> 
      </BackgroundContainer>
    </main>
  );
}
