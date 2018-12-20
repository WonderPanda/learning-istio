import * as k8s from '@pulumi/kubernetes';

new k8s.core.v1.Namespace('bookinfo', {
  metadata: { name: 'bookinfo', labels: { 'istio-injection': 'enabled' } }
});
