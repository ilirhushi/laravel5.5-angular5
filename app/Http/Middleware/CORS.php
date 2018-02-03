<?php

namespace App\Http\Middleware;

use Closure;

class CORS {
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     *
     * @return mixed
     */
    public function handle($request, Closure $next) {

        // ALLOW OPTIONS METHOD
        $headers = [
            'Access-Control-Allow-Methods' => 'HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE',
            'Access-Control-Allow-Headers' => 'Authorization, Accept, Origin, Content-Type, X-Auth-Token'
        ];

        if ($request->getMethod() == "OPTIONS") {
            // The client-side application can set only headers allowed in Access-Control-Allow-Headers
            return response()->make('OK', 200, $headers);
        }

        // get next response
        $response = $next($request);

        foreach ($headers as $key => $value)
            $response->header($key, $value);

        return $response;
    }
}
