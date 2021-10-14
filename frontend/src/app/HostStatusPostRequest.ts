export class HostStatusPostRequest {
  id: string;
  requestCommand: string;
  requestDateTime: string;
  requestedBy: string;
  requestReason: string;
  
  
  remoteHost: string;
  remoteKeyPath: string;
  remoteUserID: string;
  
  invokeShellScript: string;
  arguments: string;
    
}
