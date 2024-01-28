package com.caching.cache;

import com.github.benmanes.caffeine.cache.Caffeine;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.caffeine.CaffeineCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.util.concurrent.TimeUnit;

@Configuration
@EnableCaching
public class GeocodingCacheManager {

    @Bean
    public Caffeine caffeineConfig() {
        return Caffeine.newBuilder()
                .expireAfterWrite(5, TimeUnit.MINUTES) // Set the expiration time
                .maximumSize(100) // Set the maximum size of the cache
                .recordStats(); // Enable statistics, if needed
    }

    @Bean
    public CacheManager cacheManager(Caffeine caffeine) {
        CaffeineCacheManager caffeineCacheManager = new CaffeineCacheManager();
        caffeineCacheManager.setCaffeine(caffeine);
        return caffeineCacheManager;
    }
}

