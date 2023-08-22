import { useEffect, useState } from 'react';

function useDaumPostcodePopup(scriptUrl) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Daum 우편번호 API 스크립트 동적으로 로드
        const script = document.createElement('script');
        script.src = scriptUrl;
        script.onload = () => setIsLoaded(true);
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [scriptUrl]);

    // 팝업을 열기 위한 함수
    const openPopup = (options) => {
        if (isLoaded && window.daum) {
            new window.daum.Postcode(options).open();
        }
    };

    return openPopup;
}

export default useDaumPostcodePopup;
