// Test file to verify linting rules work
// This should produce lint errors

// Unused variable - should error
const unusedVar = 42;

// Async without await - should error
async function noAwait() {
  return 42;
}

// Floating promise - should error if called
function floatingPromise() {
  Promise.resolve(42);
}

export { noAwait, floatingPromise };
