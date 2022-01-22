import {CognitoJwtVerifier} from "aws-jwt-verify";
import {CognitoJwtVerifierSingleUserPool} from "aws-jwt-verify/dist/cjs/cognito-verifier";


export type JWTConfig = {
    userPoolId: string,
    tokenUse: "access"|"id",
    clientId: string,
    graceSeconds?: number
}

const verifier: CognitoJwtVerifierSingleUserPool<JWTConfig> = CognitoJwtVerifier.create({
    userPoolId: "somepool",
    tokenUse: "id",
    clientId: "someclientid",
    graceSeconds: 10
})
