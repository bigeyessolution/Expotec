/*
 *  This file is part of Expotec App.
 *
 *  Foobar is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  Foobar is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with Foobar.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

/**
 * 
 * @param {string} cacheName
 * @param {string} apiUrl
 * @param {function} callback
 * @returns {object}
 */
function getJSON2Cache (cacheName, apiUrl, callback) {
    cache = getCache(cacheName);
    
    if (cache || cache.fixed) {
        callback(cache.data);
        
        return;
    }
    
    $.getJSON(apiUrl, callback);
}

/**
 * 
 * @param {string} cacheName
 * @param {boolean} fixed
 * @param {mixed} content
 * @returns {void}
 */
function setCache (cacheName, fixed, content) {
    window.localStorage.setItem(cacheName, { time: 0, fixed: fixed, data: content });
}

/**
 * 
 * @param {string} cacheName
 * @returns {mixed}
 */
function getCache (cacheName) {
    cache = JSON.stringify(window.localStorage.getItem(cacheName));
    
    if (cache) {
        cache.time = Number(cache.time);
        cache.fixed = Boolean(cache.fixed);
    }
    
    return cache;
}
