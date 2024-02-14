'use client'
import { useState, useEffect } from 'react';
import jsondata from "../proposal.json";
import BackgroundContainer from "@/app/component/background";
import QuestionCard from '@/app/component/questioncard';
import MessageCard from '@/app/component/message';
import { useRouter } from 'next/navigation'

export default function EndpointPage({ params }) {
  const [noClickCount, setNoClickCount] = useState(0);
  const [endFlag, setEndFlag] = useState(0);
  const [showMessage, setShowMessage] = useState(0);
  const [message, setMessage] = useState('');
  const { id, endpoint } = params;
  const router = useRouter();

  useEffect(() => {
    const isValidEndpoint = async () => {
      const data = { message_id : id};
      try {
        const response = await fetch('/api/read-json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
      
        if (response.ok) {
          const responseData = await response.json();
          console.log('Data received from server:', responseData);
          setMessage(responseData.row['message']);
          return true;
        } else {
          console.error('Failed to receive data from server');
        }
      } catch (error) {
        console.error('Error receiving data from server:', error);
      }
        
      return false;
    };

    const isValid = isValidEndpoint();

    if (!isValid) {
      router.push('/404');
    }
  }, [id, endpoint]); 

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
    if(endFlag) {
      return '0%';
    }
    return 50 - noClickCount * 10 + '%';
  };

  const getMessage = () => {
    return message;
  }

  return (
    <div>
      <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
      <BackgroundContainer sourceName="/bg.png">
      {showMessage == 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <MessageCard message={getMessage()}/>
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
