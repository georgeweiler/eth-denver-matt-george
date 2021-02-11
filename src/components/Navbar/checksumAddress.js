import ethUtil from 'ethereumjs-util';

function checksumAddress(address) {
  const checksummed = address ? ethUtil.toChecksumAddress(address) : '';
  return checksummed;
}

export default checksumAddress;
