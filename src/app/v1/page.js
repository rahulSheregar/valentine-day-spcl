'use client'
import { useState, useEffect } from 'react';
import BackgroundContainer from "@/app/component/background";
import QuestionCard from '@/app/component/questioncard';
import MessageCard from '@/app/component/message';
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

export default function EndpointPage() {
    const [noClickCount, setNoClickCount] = useState(0);
    const [endFlag, setEndFlag] = useState(0);
    const [showMessage, setShowMessage] = useState(0);
    const router = useRouter();
    const searchParams = useSearchParams();


    const name = searchParams.get("name");
    const message = searchParams.get("message");


    useEffect(() => {
        const isValidEndpoint = () => {
            if (message) {
                return true;
            };
            return false;
        }
        const isValid = isValidEndpoint();

        if (!isValid) {
            router.push('/404');
        }
    }, [name, message]);

    const handleYes = () => {
        setShowMessage(1);
    };

    const handleNo = () => {
        if (noClickCount < 3) {
            setNoClickCount(noClickCount + 1);
        } else {
            setEndFlag(1);
        }
    };

    const getYesButtonSize = () => {
        return 50 + noClickCount * 10 + '%';
    };

    const getNoButtonSize = () => {
        if (endFlag) {
            return '0%';
        }
        return 50 - noClickCount * 10 + '%';
    };


    return (
        <div>
            <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
            <BackgroundContainer sourceName="/bg.png">
                {showMessage == 1 && (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <MessageCard name={name} message={message} />
                    </div>)}
                {showMessage == 0 && (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <QuestionCard
                            onYes={handleYes}
                            onNo={handleNo}
                            yesButtonSize={getYesButtonSize()}
                            noButtonSize={getNoButtonSize()}
                        />
                    </div>)}
            </BackgroundContainer>
        </div>
    );
}
