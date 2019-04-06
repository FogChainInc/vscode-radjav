declare namespace RadJav {
    namespace Crypto {
        function addCertificate(certificate: string): void;
        function getCertificate(certificate: number): string;
        function getCertificates(): string[];
        function getDefaultCertificates(): string[];
    }
}
