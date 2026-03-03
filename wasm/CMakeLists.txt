cmake_minimum_required(VERSION 3.16)
project(players LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)

# ------------------------------------------------------------------------------
# Sources
# For future self: add new player .cpp files here and any .cpp files with 
# functions they also call (no need to add .h files here, though)
# ------------------------------------------------------------------------------
set(PLAYERS_SOURCES
    src/RingPlayer.cpp
    src/PulsePlayer.cpp
    src/vec2f.cpp
    src/players_api.cpp
)

add_executable(players ${PLAYERS_SOURCES})

target_include_directories(players PRIVATE
    ${CMAKE_CURRENT_SOURCE_DIR}/include
    ${CMAKE_CURRENT_SOURCE_DIR}/src
)

# ------------------------------------------------------------------------------
# Output location, where .js and .wasm files will be emitted
# (we copy these over later)
# ------------------------------------------------------------------------------
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_CURRENT_BINARY_DIR})

# ------------------------------------------------------------------------------
# Emscripten: export lists (classic global Module, no MODULARIZE)
# Pass via CMAKE_EXE_LINKER_FLAGS so they reach the linker.
# ------------------------------------------------------------------------------
set(PLAYERS_EXPORTED_RUNTIME_METHODS
    ccall
    cwrap
    HEAPU8
)
list(JOIN PLAYERS_EXPORTED_RUNTIME_METHODS "," PLAYERS_EXPORTED_RUNTIME_METHODS_STR)

set(PLAYERS_EXPORTED_FUNCTIONS
    _malloc
    _free
    _wasm_ring_init
    _wasm_ring_set_center
    _wasm_ring_set_props
    _wasm_ring_set_colors
    _wasm_ring_start
    _wasm_ring_update
    _wasm_pulse_init
    _wasm_pulse_set_color
    _wasm_pulse_start
    _wasm_pulse_update
    _wasm_pulse_dispose
)

# Build EXPORTED_FUNCTIONS JSON array ["_malloc","_free",...]
set(EXPORTED_FUNCTIONS_QUOTED "")
foreach(f IN LISTS PLAYERS_EXPORTED_FUNCTIONS)
    list(APPEND EXPORTED_FUNCTIONS_QUOTED "\"${f}\"")
endforeach()
list(JOIN EXPORTED_FUNCTIONS_QUOTED "," EXPORTED_FUNCTIONS_JSON)
set(EXPORTED_FUNCTIONS_JSON "[${EXPORTED_FUNCTIONS_JSON}]")

set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} -sEXPORTED_RUNTIME_METHODS=${PLAYERS_EXPORTED_RUNTIME_METHODS_STR} -sEXPORTED_FUNCTIONS=${EXPORTED_FUNCTIONS_JSON}")

target_link_options(players PRIVATE
    "-s ALLOW_MEMORY_GROWTH=1"
    "-s ENVIRONMENT=web"
)
