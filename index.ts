import * as k8s from '@pulumi/kubernetes';

const istioSystem = 'istio-system';

const istioSystemNamespace = new k8s.core.v1.Namespace(istioSystem, {
  metadata: {
    name: istioSystem
  }
});

const istio = 'istio';

const istioChart = new k8s.helm.v2.Chart(
  istio,
  {
    namespace: istioSystemNamespace.metadata.apply(x => x.name),
    chart: 'istio',
    fetchOpts: { repo: 'https://istio.io/charts/' },
    version: '1.0.1',
    values: {
      gateways: {
        ['istio-ingressgateway']: {
          type: 'NodePort'
        },
        ['istio-egressgateway']: {
          type: 'NodePort'
        }
      },
      kiali: { enabled: true }
    }
  },
  { dependsOn: istioSystemNamespace }
);
