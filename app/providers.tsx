'use client';

import * as React from 'react';
import { FutureverseProvider, FutureverseAuthClient } from '@futureverse/react';
import * as fvSdk from '@futureverse/experience-sdk';

const authClient = new FutureverseAuthClient({
  clientId: process.env.NEXT_PUBLIC_FUTUREVERSE_CLIENT_ID!,
  environment:
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' ? fvSdk.ENVIRONMENTS.production : fvSdk.ENVIRONMENTS.staging,
  redirectUri: typeof window !== 'undefined' ? window.location.origin : 'https://tradeverse.com',
});

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <FutureverseProvider
      stage="development"
      Web3Provider="wagmi"
      requiredChains={['TRN']}
      authClient={authClient}
      walletConnectProjectId={process.env.NEXT_PUBLIC_WALLET_CONNECT_CLIENT_ID!}
      isCustodialLoginEnabled
    >
      {children}
    </FutureverseProvider>
  );
}
