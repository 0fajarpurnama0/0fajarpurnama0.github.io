async function ethereum_request_input(method, params) {
    await ethereum.request({
        method,
        params
    });
}