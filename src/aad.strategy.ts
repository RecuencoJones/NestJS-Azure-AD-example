import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { BearerStrategy } from 'passport-azure-ad';

const clientID = process.env.AAD_CLIENT_ID;
const tenantID = process.env.AAD_TENANT_ID;

/**
 * Extracts ID token from header and validates it.
 */
@Injectable()
export class AzureADStrategy extends PassportStrategy(BearerStrategy, 'aad') {
  constructor() {
    super({
      identityMetadata: `https://login.microsoftonline.com/${ tenantID }/v2.0/.well-known/openid-configuration`,
      clientID
    });
  }

  async validate(data) {
    return data;
  }
}
