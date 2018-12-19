import * as k8s from '@pulumi/kubernetes';

const istioSystem = 'istio-system';

const istioSystemNamespace = new k8s.core.v1.Namespace(istioSystem, {
  metadata: {
    name: istioSystem
  }
});
